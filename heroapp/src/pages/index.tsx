import DefaultLayout from "@/layouts/default";
import Quote from "@/components/quote";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Quote content="기분이 저기압일 땐 고기앞으로 가라." tags="sdf"/>
      </section>
    </DefaultLayout>
  );
}
