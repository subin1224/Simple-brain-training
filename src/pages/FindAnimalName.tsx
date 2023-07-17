import { Input } from "../components/Input";
import { PageLayout } from "../components/PageLayout";
import { Txt } from "../components/Txt";
import { Card } from "../components/card/Card";
import { CardContent } from "../components/card/CardContent";
import { CardTitle } from "../components/card/CardTitle";

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
        <CardContent>
          <Txt typography="h2">1. ㄱ ㄹ </Txt>
          <Input maxLength={2} />
        </CardContent>
      </Card>
    </PageLayout>
  );
}
