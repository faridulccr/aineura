import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `JourneySection`.
 */
export type JourneySectionProps =
  SliceComponentProps<Content.JourneySectionSlice>;

/**
 * Component for "JourneySection" Slices.
 */
const JourneySection = ({ slice }: JourneySectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for journey_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default JourneySection;
