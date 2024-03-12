"use client";
import React from "react";
import { observer } from "mobx-react";
import { TextResource } from "../entity/TextResource";

const TEXT_RESOURCES = [
  {
    name: "Title",
    fontSize: 28,
    fontWeight: 600,
  },
];

export const TextResourcesPanel = observer(() => {
  return (
    <div>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold text-black">
        Text
      </div>
      <ul>


        {TEXT_RESOURCES.map((resource) => {
          return (
            <li
              key={resource.name}
            >
              <TextResource
                sampleText={resource.name}
                fontSize={resource.fontSize}
                fontWeight={resource.fontWeight}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
});
