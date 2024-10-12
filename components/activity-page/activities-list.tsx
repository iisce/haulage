import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";
import { getActivities } from "@/data/activities";
import { format } from "date-fns";

export default async function ActivityList() {
     const activities = await getActivities();
     return (
          <>
               <Accordion
                    type="single"
                    collapsible
                    className="m-5 mx-auto w-full px-4"
               >
                    {activities.map((activity) => (
                         <AccordionItem value={activity._id} key={activity._id}>
                              <AccordionTrigger>
                                   {format(
                                        new Date(activity.createdAt),
                                        "MMMM d y - p",
                                   )}
                              </AccordionTrigger>
                              <AccordionContent className="px-3">
                                   <div>{activity.title}</div>
                                   <div>{activity.message}</div>
                              </AccordionContent>
                         </AccordionItem>
                    ))}
               </Accordion>
          </>
     );
}
