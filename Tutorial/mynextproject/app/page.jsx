import Users from "@/components/Users";

export const metadata = {
  title: 'Mi página Home'
}

const page = () => {
  return (
    <section>
      <h1>Hello World!</h1>
      <Users />
    </section>
  );
};

export default page;
