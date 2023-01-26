import { useRouter } from "next/router";

function SidebarLink({ Icon, text, active = false }: any) {
  const router = useRouter();
  return (
    <div
      className={`py-2 mb-4 flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${
        active && "font-bold"
      }`}
      onClick={() => router.push(`/${text}`)}
    >
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}

export default SidebarLink;
