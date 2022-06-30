// 问答
import NavBar from "@/components/NavBar"
import QuestionItem from "./QuestionItem/index"

export default function Question () {
  let list = [
    {
      id: 1,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 2,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 3,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 4,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 5,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 6,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 7,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
    {
      id: 8,
      title: "作为IT行业的过来人，你有什么话想对后背说的？",
      endorse: "1500",
      comment: "570",
      times: "2021-03-11 09:00:00"
    },
  ]
  return (
    <div>
      {/* 顶部 */}
      <NavBar title="问答" />

      {/* 列表 */}
      {list.map((item) => {
        return (
          <div key={item.id}>
            <QuestionItem list={item} />
          </div>
        )
      })}

    </div>
  )
}