"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { drawRect } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// require("@tensorflow/tfjs-backend-cpu");
// require("@tensorflow/tfjs-backend-webgl");
const cocossd = require("@tensorflow-models/coco-ssd");

import Webcam from "react-webcam";

export interface Detection {
     bbox: [number, number, number, number];
     class: string;
     score: number;
}

interface DetectionResult {
     detections: Detection[];
}

interface Camera {
     deviceId: string;
     label: string;
}

interface ObjectTableProps {
     objects: Detection[];
}

export default function TensorFlowPage() {
     const webCamRef = useRef<any>(null);
     const canvasRef = useRef<any>(null);

     const [cameraDevices, setCameraDevices] = useState<Camera[]>([]);
     const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
     const [detectedObjects, setDetectedObjects] = useState<Detection[]>([]);

     useEffect(() => {
          const getCameraDevices = async () => {
               try {
                    const devices =
                         await navigator.mediaDevices.enumerateDevices();
                    const cameras = devices.filter(
                         (device) => device.kind === "videoinput",
                    );
                    setCameraDevices(
                         cameras.map((camera) => ({
                              deviceId: camera.deviceId,
                              groupId: camera.groupId,
                              kind: camera.kind,
                              label: camera.label || "",
                         })),
                    );
                    setSelectedCamera(cameras[0]?.deviceId); // Default to the first camera found
               } catch (error) {
                    console.error("Error enumerating video devices:", error);
               }
          };

          getCameraDevices();
     }, []);

     const handleCameraChange = (event: any) => {
          setSelectedCamera(event.target.value);
     };

     const runCoco = async () => {
          const net = await cocossd.load();
          setInterval(() => {
               detect(net);
          }, 1000);
     };

     const detect = async (net: any) => {
          if (
               typeof webCamRef.current !== "undefined" &&
               webCamRef.current !== null &&
               webCamRef.current.video.readyState === 4
          ) {
               const video = webCamRef.current.video;
               const videoWidth = webCamRef.current.video.videoWidth;
               const videoHeight = webCamRef.current.video.videoHeight;

               webCamRef.current.video.width = videoWidth;
               webCamRef.current.video.height = videoHeight;

               canvasRef.current.width = videoWidth;
               canvasRef.current.height = videoHeight;

               const obj: Detection[] = await net.detect(video);
               if (obj.length > 0) {
                    if (
                         obj[0].class.toLowerCase() === "car" ||
                         obj[0].class.toLowerCase() === "cell phone"
                    ) {
                         setDetectedObjects((prevObjects) => [
                              ...prevObjects,
                              ...obj,
                         ]);
                    }
               }

               console.log(obj);

               const ctx = canvasRef.current.getContext("2d");
               drawRect(obj, ctx);
          }
     };

     useEffect(() => {
          runCoco();
     }, []);

     const ObjectTable: React.FC<ObjectTableProps> = ({ objects }) => {
          const [screenshots, setScreenshots] = useState<string[]>([]);

          const captureCarScreenshot = (object: Detection): string => {
               const video = document.createElement("video");
               video.srcObject = webCamRef.current.video.srcObject;
               const canvas = document.createElement("canvas");
               const ctx: any = canvas.getContext("2d");

               const { bbox } = object;
               const [x, y, width, height] = bbox;

               canvas.width = width;
               canvas.height = height;

               ctx.drawImage(video, x, y, width, height, 0, 0, width, height);

               const screenshot = canvas.toDataURL("image/png");
               return screenshot;
          };

          useEffect(() => {
               const screenshotsArray = objects
                    .filter((obj) => obj.class.toLowerCase() === "car")
                    .map((car) => captureCarScreenshot(car));

               setScreenshots(screenshotsArray);
          }, [objects]);

          return (
               <div>
                    <h2>Detected Cars</h2>
                    {objects.length === 0 ? (
                         <p>No cars detected.</p>
                    ) : (
                         <table>
                              <thead>
                                   <tr>
                                        <th>Class</th>
                                        <th>Bbox X</th>
                                        <th>Bbox Y</th>
                                        <th>Bbox Height</th>
                                        <th>Bbox Width</th>
                                        <th>Score</th>
                                        <th>Actions</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {objects.map((car, index) => (
                                        <tr key={index} className="gap-3">
                                             <td>{car.class}</td>
                                             <td>
                                                  {JSON.stringify(car.bbox[0])}
                                             </td>
                                             <td>
                                                  {JSON.stringify(car.bbox[1])}
                                             </td>
                                             <td>
                                                  {JSON.stringify(car.bbox[2])}
                                             </td>
                                             <td>
                                                  {JSON.stringify(car.bbox[3])}
                                             </td>
                                             <td>{car.score}</td>
                                             <td>
                                                  {
                                                       <Link
                                                            href={
                                                                 screenshots[
                                                                      index
                                                                 ]
                                                            }
                                                            download={`car_screenshot_${index}.png`}
                                                       >
                                                            Download Screenshot
                                                       </Link>
                                                  }
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    )}
               </div>
          );
     };
     console.log({ cameraDevices });

     return (
          <div className="flex flex-col gap-4 p-5">
               <Card className="flex aspect-square w-full flex-col gap-6 md:w-[500px]">
                    <CardContent className="relative aspect-square w-full overflow-hidden rounded-t-xl md:w-[500px]">
                         <select
                              className="absolute right-3 top-3 z-30"
                              onChange={handleCameraChange}
                              value={selectedCamera || ""}
                         >
                              {cameraDevices.map((camera) => (
                                   <option
                                        key={camera.deviceId}
                                        value={camera.deviceId}
                                   >
                                        {camera.label ||
                                             `Camera ${
                                                  cameraDevices.indexOf(
                                                       camera,
                                                  ) + 1
                                             }`}
                                   </option>
                              ))}
                         </select>

                         <Webcam
                              videoConstraints={{
                                   deviceId: selectedCamera
                                        ? { exact: selectedCamera }
                                        : undefined,
                              }}
                              ref={webCamRef}
                              muted={true}
                              className="absolute left-0 right-0 z-[9] mx-auto aspect-square h-full rounded-t-xl object-cover text-center"
                         />

                         <canvas
                              ref={canvasRef}
                              className="absolute left-0 right-0 z-[10] mx-auto aspect-square h-full rounded-t-xl object-cover text-center"
                         />
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                         <span className="text-sm">Camera 1</span>
                         <Badge className="gap-1">
                              Live{" "}
                              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-red-500"></span>
                         </Badge>
                    </CardFooter>
               </Card>
               <ObjectTable objects={detectedObjects} />
          </div>
     );
}
