import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useCommentPostMutation } from "../redux/features/api/apiSlice";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const dummyComments = [
  "Bhalo na",
  "Ki shob ghori egula??",
  "Eta kono product holo ??",
  "200 taka dibo, hobe ??",
];

interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const [postComment, options] = useCommentPostMutation();

  console.log(options);

  const handleComment = () => {
    const option = {
      id: id,
      data: { comment: inputValue },
    };
    postComment(option);

    setInputValue("");
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-5 items-center">
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="min-h-[30px]"
        />
        <Button
          onClick={() => handleComment()}
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </div>
      <div className="mt-10">
        {dummyComments.map((comment, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
