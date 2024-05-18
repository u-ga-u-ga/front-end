import { Link } from "@tanstack/react-router";

import { Separator } from "@/shared/ui/separator";

export default function PageFooter() {
  return (
    <>
      <Separator />
      <footer className="p-8">
        <ul className="flex flex-col gap-4">
          {[
            "이용약관",
            "개인정보처리방침",
            "운영정책",
            "청소년보호정책",
            "회사정보",
          ].map((link) => (
            <li key={link}>
              <Link>{link}</Link>
            </li>
          ))}
          <li className="text-gray-500">가구고고</li>
        </ul>
      </footer>
    </>
  );
}
