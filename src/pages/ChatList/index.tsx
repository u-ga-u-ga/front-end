import { createFileRoute } from "@tanstack/react-router";

import { ChatroomItem } from "@/entities/chatRoom";
import { SingleChoice } from "@/shared/ui";
import { ChatListPageHeader } from "@/widgets/headers/chatListPageHeader";

export const Route = createFileRoute("/ChatList/")({
  component: ChatListPage,
});

const mockData = [
  {
    sellerNickname: "판매자 닉네임",
    sellerWhereabout: "용이동",
    imageSrc: "https://dummyimage.com/72x72/000/fff.png",
    lastChatAt: "3일전",
    lastChatContent:
      "마지막 대화 내용 니아ㅓㄹ니아러니ㅏ어리낭러ㅏㅣ너이ㅏㅓㅣㅏㄴ",
  },
  {
    sellerNickname: "판매자 닉네임",
    sellerWhereabout: "용이동",
    imageSrc: "https://dummyimage.com/72x72/000/fff.png",
    lastChatAt: "3일전",
    lastChatContent:
      "마지막 대화 내용 니아ㅓㄹ니아러니ㅏ어리낭러ㅏㅣ너이ㅏㅓㅣㅏㄴ",
  },
];

export default function ChatListPage() {
  return (
    <div className="relative flex w-full flex-shrink-0 flex-col items-start gap-y-0 bg-[rgba(255,_255,_255,_1)]">
      <ChatListPageHeader />
      <div className="relative flex flex-shrink flex-grow basis-0 flex-col items-start gap-y-8 self-stretch pb-0 pl-9 pr-9 pt-0">
        <SingleChoice
          title={""}
          color={"primary"}
          choices={[
            {
              label: "소파",
              value: "1",
            },
            {
              label: "Selling",
              value: "2",
            },
            {
              label: "Buying",
              value: "3",
            },
            {
              label: "Unread",
              value: "4",
            },
          ]}
          selectedValue={null}
          onChangeValue={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />

        <div className="relative flex flex-shrink flex-grow basis-0 flex-col items-start gap-y-6 self-stretch">
          {mockData.map((data, index) => (
            <ChatroomItem
              key={index}
              sellerNickname={data.sellerNickname}
              sellerWhereabout={data.sellerWhereabout}
              imageSrc={data.imageSrc}
              lastChatAt={data.lastChatAt}
              lastChatContent={data.lastChatContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
