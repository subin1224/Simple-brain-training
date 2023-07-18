import { PageLayout } from "../components/PageLayout";
import { Txt } from "../components/Txt";
import { Card } from "../components/card/Card";
import { CardContent } from "../components/card/CardContent";
import { CardTitle } from "../components/card/CardTitle";
import { ConsonantInput } from "components/ConsonantInput";

export function FindAnimalName() {
  return (
    <PageLayout>
      <Card>
        <CardTitle>
          <Txt typography="h3">동물 이름 맞히기</Txt>
          <br /> {/* 추후 수정 예정 */}
          <Txt typography="h5">
            다음 제시된 자음을 보고 동물 이름을 맞혀보세요.
          </Txt>
        </CardTitle>
        <CardContent
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <ConsonantInput consonant="ㄱㄹ" />
          <ConsonantInput consonant="ㅋㄲㄹ" />
          <ConsonantInput consonant="ㅇㄹㅁ" />
          <ConsonantInput consonant="ㄷㄹㄴ" />
          <ConsonantInput consonant="ㅎㅁ" />
          <ConsonantInput consonant="ㅊㅅㅁ" />
        </CardContent>
      </Card>
    </PageLayout>
  );
}

/*
<ConsonantInput consonant="ㄲㅁㄱ" />
          <ConsonantInput consonant="ㅁㄷㅈ" />
          <ConsonantInput consonant="ㄷㄹㅈ" />
          <ConsonantInput consonant="ㄷㅁㅂ" />
          <ConsonantInput consonant="ㄷㅅㄹ" />
          <ConsonantInput consonant="ㅊㅅ" />

*/
