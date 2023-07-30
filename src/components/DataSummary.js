import { Card, Metric, Text, CategoryBar, Legend, Grid } from "@tremor/react";

const categories = [
  {
    title: "Total patients",
    metric: "1000",
    subCategoryValues: [300, 700],
    subCategroyColors: ["emerald", "red"],
    subCategoryTitles: ["Inpatient", "Outpatient"],
  },
  {
    title: "Total services",
    metric: "100",
    subCategoryValues: [30, 41, 29],
    subCategroyColors: ["indigo", "violet", "purple"],
    subCategoryTitles: ["Lab", "X-Ray", "Surgery"],
  },
  {
    title: "Total drugs",
    metric: "122",
    subCategoryValues: [30, 40, 30],
    subCategroyColors: ["emerald", "yellow", "rose"],
    subCategoryTitles: ["Antibiotics", "Antipyretics", "Analgesics"],
  },
];

export default function DataSummary() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <CategoryBar
            values={item.subCategoryValues}
            colors={item.subCategroyColors}
            className="mt-4"
          />
          <Legend
            categories={item.subCategoryTitles}
            colors={item.subCategroyColors}
            className="mt-3"
          />
        </Card>
      ))}
    </Grid>
  );
}