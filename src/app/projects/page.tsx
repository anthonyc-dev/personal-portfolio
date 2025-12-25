import { redirect } from "next/navigation";

export default function ProjectsPage() {
  // Redirect to home page or show projects listing
  // For now, redirecting to home where projects section is shown
  redirect("/#projects");
}
