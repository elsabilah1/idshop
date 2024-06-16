import { Button } from "./common/button";
import Container from "./common/container";
import { DotsMenu } from "./common/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./common/tabs";
import FormPaketData from "./form-paket-data";
import FormPulsa from "./form-pulsa";

export default function TopUpAndBill() {
  return (
    <Container title="Top Up dan Tagihan">
      <Tabs defaultValue="pulsa" className="w-full">
        <TabsList className="w-full border-b border-neutral-2">
          <TabsTrigger value="pulsa">Pulsa</TabsTrigger>
          <TabsTrigger value="paket-data">Paket Data</TabsTrigger>
          <TabsTrigger value="listrik-pln" className="hidden md:block">
            Listrik PLN
          </TabsTrigger>
          <TabsTrigger value="uang-elektronik" className="hidden md:block">
            Uang Elektronik
          </TabsTrigger>
          <TabsTrigger value="air-pdam" className="hidden md:block">
            Air PDAM
          </TabsTrigger>
          <Button variant="ghost/primary">
            <DotsMenu />
          </Button>
        </TabsList>
        <TabsContent value="pulsa">
          <FormPulsa />
        </TabsContent>
        <TabsContent value="paket-data">
          <FormPaketData />
        </TabsContent>
        <TabsContent value="listrik-pln">
          <FormPaketData />
        </TabsContent>
        <TabsContent value="uang-elektronik">
          <FormPaketData />
        </TabsContent>
        <TabsContent value="air-pdam">
          <FormPaketData />
        </TabsContent>
      </Tabs>
    </Container>
  );
}
