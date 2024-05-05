import prismadb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SetupPageLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {
  const { userId } = auth();

  if (!userId) return redirect('/sign-in');

  const store = await prismadb.store.findFirst({
    where: {
      userId
    }
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return (
    <>
      {children}
    </>
  )
}

export default SetupPageLayout