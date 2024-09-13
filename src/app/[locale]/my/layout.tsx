import { ProfileSidebar } from "@/modules/profile/components/profileSidebar/profileSidebar";


export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <ProfileSidebar />
        </aside>
        <main className="w-full md:w-3/4">
          {children}
        </main>
      </div>
    </div>
  );
}