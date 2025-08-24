import Heading from './Heading.jsx';
import Section from './Section.jsx';
import './contextstyle.css';

export default function ContextPage() {
  return (
    //  <Section level={1}>
    //   <Heading>Title</Heading>
    //   <Section level={2}>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Heading>Heading</Heading>
    //     <Section level={3}>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Heading>Sub-heading</Heading>
    //       <Section level={4}>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //         <Heading>Sub-sub-heading</Heading>
    //       </Section>
    //     </Section>
    //   </Section>
    // </Section>
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
