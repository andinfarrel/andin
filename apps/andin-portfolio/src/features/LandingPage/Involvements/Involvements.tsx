import { PreviewCardProps } from "@/types";
import { workHistory } from "@/utils/data/involvementsData";
import { ChangeEventHandler, FC, useCallback, useState } from "react";
import PreviewCard from "./PreviewCard";

const Involvements: FC = () => {
  const [showcaseHistory, setShowcaseHistory] = useState(workHistory);
  const getTags = useCallback((list: PreviewCardProps[]) => {
    const tags: string[] = [];
    list.forEach((item) => {
      item.tags?.forEach((tag) => {
        if (!tags.includes(tag)) tags.push(tag);
      });
    });
    return tags;
  }, []);

  const onSelectTag: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setShowcaseHistory(() => {
      if (e.target.value === "All") return workHistory;
      return workHistory.filter((work) => work.tags.includes(e.target.value));
    });
  };

  return (
    <section className="flex flex-col h-screen space-y-8 snap-start place-content-center">
      <div className="p-8 mx-auto text-center">
        <p className="p-4 text-2xl italic font-bold md:text-4xl">
          Involvements I am proud of
        </p>
      </div>
      <div className="mx-auto">
        <select
          onChange={onSelectTag}
          className="p-2 rounded-md"
          title="tags"
          name="tags"
          id="tags"
        >
          <option value="All">All</option>
          {getTags(workHistory).map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
      <div className="hide-scroll p-8 sm:pl-12 pb-40 lg:pb-36 lg:px-36 grid grid-flow-col auto-cols-[85%] md:auto-cols-[33%] gap-8 overflow-x-auto">
        {showcaseHistory.map((work) => (
          <div key={work.company}>
            {work.title && <p className="font-bold">{work.title}</p>}
            <p className="py-1 pb-2 font-medium whitespace-pre-wrap">
              {work.startDate && work.endDate ? (
                <span>
                  {work.startDate} - {work.endDate}{" "}
                </span>
              ) : (
                <span className="p-2" />
              )}
            </p>
            <PreviewCard key={work.company} data={work as PreviewCardProps} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Involvements;
