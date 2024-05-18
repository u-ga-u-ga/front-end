import { InputHTMLAttributes, useRef } from "react";

import SearchBox from "@/shared/ui/searchbox";

type CSSearchBoxProps = React.ComponentPropsWithRef<typeof SearchBox> & {
  onSearch?: (keyword: InputHTMLAttributes<HTMLInputElement>["value"]) => void;
};

export default function CSSearchForm({ onSearch, ...props }: CSSearchBoxProps) {
  const keywordRef = useRef<HTMLInputElement>(null);
  const triggerOnSearchAction = () => {
    onSearch && onSearch(keywordRef.current?.value);
  };
  return (
    <SearchBox
      ref={keywordRef}
      onSearchButtonClick={triggerOnSearchAction}
      onKeyDown={(e) => {
        if (e.key === "Enter") triggerOnSearchAction();
      }}
      placeholder="검색어를 입력해주세요"
      {...props}
    />
  );
}
