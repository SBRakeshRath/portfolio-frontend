import NavBar from "../_components/nav/nav";
import ChartComponent from "./chartComponent";
import "./dsaStyle.scss";
import { Chart } from "chart.js";
async function getLeetcodeData() {
  try {
    const url = "https://leetcode.com/graphql";
    const query = ` query userProfileUserQuestionProgressV2($userSlug: String!) {
  userProfileUserQuestionProgressV2(userSlug: $userSlug) {
    numAcceptedQuestions {
      count
      difficulty
    }
    numFailedQuestions {
      count
      difficulty
    }
    numUntouchedQuestions {
      count
      difficulty
    }
    userSessionBeatsPercentage {
      difficulty
      percentage
    }
    totalQuestionBeatsPercentage
  }
}
`;
    const variables = `{"userSlug": "Tf5g5BckMi"}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching Data");
    console.log(error);
    return "Error Fetching Data";
  }
}
export default async function DSAPage() {
  const leetCodeData = await getLeetcodeData();
  const easy =
    leetCodeData.data.userProfileUserQuestionProgressV2.numAcceptedQuestions.filter(
      (item: { difficulty: string; count: number }) =>
        item.difficulty === "EASY"
    )[0].count;
  const medium =
    leetCodeData.data.userProfileUserQuestionProgressV2.numAcceptedQuestions.filter(
      (item: { difficulty: string; count: number }) =>
        item.difficulty === "MEDIUM"
    )[0].count;
  const hard =
    leetCodeData.data.userProfileUserQuestionProgressV2.numAcceptedQuestions.filter(
      (item: { difficulty: string; count: number }) =>
        item.difficulty === "HARD"
    )[0].count;

  return (
    <div className="dsaPage">
      <NavBar />
      <div className="dsaPageComponent">
        <div className="info">
          <h1>Leetcode ID: <a href="https://leetcode.com/u/Tf5g5BckMi/" target="_blank">Tf5g5BckMi</a> </h1>
        </div>
        <div className="leetcodeCard">
          <ChartComponent easy={easy} medium={medium} hard={hard} />
        </div>
      </div>
    </div>
  );
}
