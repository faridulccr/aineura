"use client";
import { components } from "@/slices";
import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";

type sliceType = { slices: SliceZoneLike<SliceLike<string>> };

const Homepage = ({ slices }: sliceType) => {
    return <SliceZone slices={slices} components={components} />;
};

export default Homepage;