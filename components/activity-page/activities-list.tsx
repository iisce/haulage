import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion";
import { getActivities } from "@/data/activities";
import { format, parseISO } from "date-fns";
import { groupBy } from "lodash";

// Helper function to format the date for grouping
const formatDateForGrouping = (date: string) =>
     format(parseISO(date), "yyyy-MM-dd");

// Helper function to format the date for display
const formatDateForDisplay = (date: string) =>
     format(parseISO(date), "MMMM d, yyyy");

export default async function ActivityList() {
     const activities = await getActivities();

     // Sort activities by date (newest first)
     const sortedActivities = activities.sort(
          (a, b) =>
               new Date(b.createdAt).getTime() -
               new Date(a.createdAt).getTime(),
     );

     // Group activities by day
     const groupedActivities = groupBy(sortedActivities, (activity) =>
          formatDateForGrouping(activity.createdAt.toString()),
     );

     return (
          <Accordion
               type="single"
               collapsible
               className="m-5 mx-auto w-full px-4"
          >
               {Object.entries(groupedActivities).map(
                    ([date, dayActivities]) => (
                         <AccordionItem value={date} key={date}>
                              <AccordionTrigger>
                                   {formatDateForDisplay(
                                        dayActivities[0].createdAt.toString(),
                                   )}
                              </AccordionTrigger>
                              <AccordionContent>
                                   {dayActivities.map((activity) => (
                                        <div
                                             key={activity.id}
                                             className="mb-4 last:mb-0"
                                        >
                                             <div className="font-semibold">
                                                  {activity.title}
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  {activity.message}
                                             </div>
                                             <div className="text-xs text-gray-400">
                                                  {format(
                                                       parseISO(
                                                            activity.createdAt.toString(),
                                                       ),
                                                       "p",
                                                  )}
                                             </div>
                                        </div>
                                   ))}
                              </AccordionContent>
                         </AccordionItem>
                    ),
               )}
          </Accordion>
     );
}
