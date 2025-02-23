interface PropParams {
  params: {
    url: string | string[] | undefined;
  };
}

const Page = ({ params }: PropParams) => {
  console.log(params);
  return <div></div>;
};

export default Page;
