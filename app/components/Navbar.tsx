export default function Navbar() {
  return (
    <>
      <div className="mt-8 mx-4 p-4 flex justify-between grid-col-3 rounded-full bg-zinc-900">
        <div className="pl-4 text-xl font-bold">daniel</div>
        <div className="flex justify-end">
          <div className="px-12 text-xl font-bold">projects</div>
          <div className="pr-4 text-xl font-bold">contact</div>
        </div>
      </div>
    </>
  );
}
