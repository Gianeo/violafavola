import { Container } from "@/components/primitives/Container";
import { Icon } from "@/components/primitives/Icon";
import { Section } from "@/components/primitives/Section";
import type { ExpertiseContent } from "@/content/home";
import { Grid } from "../primitives/Grid";

export function Expertise({ items }: ExpertiseContent) {
  const renderLines = (text: string) =>
    text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`} className="block">
        {line}
      </span>
    ));

  return (
    <Section className="bg-bg-dark -mt-40">
      <Container>
      <Grid>
        <div className="col-start-4 col-span-7 flex flex-col gap-8 pb-8">
          <div className="flex flex-col gap-4 md:flex-row">
            {items.map((item) => (
              <div key={item.title} className="flex-1 p-4 pl-0">
                <div className="flex items-center gap-4">
                  <span className="flex size-16 items-center justify-center rounded-full">
                    <Icon src={item.icon} alt={item.title} size={20} />
                  </span>
                  <h3 className="copy-lg font-medium text-neutral-lighter">
                    {renderLines(item.title)}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Grid>
      </Container>
    </Section>
  );
}
