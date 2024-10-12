import CreateVehicleForm from "@/components/forms/newVehicleForm";

export default function NewVehiclePage() {
     return (
          <div className="flex w-full flex-col pt-[20px]">
               <div className="py-3 pl-5 text-lg">VEHICLE INFORMATION</div>
               <div className="mx-4 my-4">
                    <CreateVehicleForm />
               </div>
          </div>
     );
}
