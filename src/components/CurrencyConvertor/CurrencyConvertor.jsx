import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TITLE, CONVERT_FROM, CONVERT_TO, BUTTON_TEXT } from './constants'

export const CurrencyConvertor = () => {
  return (
    <>
      <CardTitle className="mt-2 mb-5 text-xl">{TITLE}</CardTitle>
      <Card className="size-96">
        <CardHeader>
          <CardContent>
            <form className="grid gap-7">
              <div className="grid w-full items-center gap-1">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input type="number" name="amount" id="amount" placeholder='Enter an amount' />
                </div>
              </div>

              <div>
                <h3>{CONVERT_FROM}</h3>
                <Select>
                  <SelectTrigger id="from">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                    <SelectItem value="JPY">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3>{CONVERT_TO}</h3>
                <Select>
                  <SelectTrigger id="to">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                    <SelectItem value="JPY">JPY</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button>{BUTTON_TEXT}</Button>
          </CardFooter>
        </CardHeader>
      </Card >
    </>
  )
};