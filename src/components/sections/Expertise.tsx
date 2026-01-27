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
    <Section tone="dark" className="-mt-16 md:-mt-40">
      <Container>
      <Grid>
        <div className="col-span-4 flex flex-col gap-6 pb-6 md:col-start-4 md:col-span-7 md:gap-8 md:pb-8">
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            {items.map((item) => (
              <div key={item.title} className="md:flex-1 p-4 md:p-0">
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-full bg-white/5 md:size-16 md:bg-transparent">
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
