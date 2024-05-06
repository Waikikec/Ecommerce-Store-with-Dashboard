import { SizeType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<SizeType[]> => {
  const res = await fetch(URL);

  return res.json();
}

export default getSizes;