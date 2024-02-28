/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2024-01-24 16:42:20
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-28 09:40:12
 * @FilePath: /next-app/app/compoents/PurchaseButton.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use client";
import { useCallback, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useSession } from "next-auth/react";
const PurchaseButton = (props: {
  price: string;
  name: string;
  id: string;
  users: string;
}) => {
  const { price, name, id, users } = props;
  const buyers: any[] = JSON.parse(users || "[]");
  const session = useSession();
  const { data }: { data: { user: { id: string } } } = session as any;
  const [codeURL, setCodeURL] = useState(""); //支付二维码
  const [tradeNum, setTradeNum] = useState(""); //系统订单号
  const [outTradeNum, setOutTradeNum] = useState(""); //交易订单
  const isBuy = buyers.includes(data?.user?.id);
  const handlePurchase = useCallback(async () => {
    if(isBuy){
      return
    }
    const response = await fetch(`${process.env.API_HOST}api/pay`, {
      method: "post",
      body: JSON.stringify({
        price: String((Number(price) / 100).toFixed(2)),
        name,
      }),
    });
    const {
      message: { qrcode, tradeNumber, trade_no },
    } = await response.json();
    setCodeURL(qrcode);
    setTradeNum(trade_no);
    setOutTradeNum(tradeNumber);
    const aliPayModal: any = document?.getElementById("aliPayModal");
    if (aliPayModal && aliPayModal.showModal) {
      aliPayModal.showModal();
    }
  }, [price, name,isBuy]);

  useEffect(() => {
    if (tradeNum && outTradeNum) {
      const timer = setInterval(async () => {
        const response = await fetch(
          `${process.env.API_HOST}api/pay?outTradeNum=${outTradeNum}&tradeNum=${tradeNum}`,
          { method: "get" }
        );

        if (response) {
          const {
            message: { status },
          } = await response.json();
          if (status === "1") {
            clearInterval(timer);
            const aliPayModal: any = document?.getElementById("aliPayModal");
            if (aliPayModal && aliPayModal.close) {
              aliPayModal.close();
              await fetch(`${process.env.API_HOST}/api/product/${id}`, {
                method: "put",
              });
              enqueueSnackbar("购买成功");
            }
          }
        }
      }, 3000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [tradeNum, outTradeNum, id]);
  return (
    <>
      <div className=" w-full  rounded-lg drop-shadow-2xl flex gap-4 flex-wrap text-center justify-end ">
        <div className="flex gap-4 items-center flex-shrink-0 justify-end">
          <button
            onClick={handlePurchase}
            className="bg-indigo-500  px-5 py-2 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            {isBuy ? "下载" : "支付下载"}
          </button>
        </div>
      </div>
      <SnackbarProvider
        autoHideDuration={1000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
        variant="success"
      />
      <dialog id="aliPayModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
          <p className="py-4 flex justify-center">
            <QRCode
              value={codeURL}
              size={200}
              fgColor="#000000"
              imageSettings={{
                src: "/支付宝logo.png",
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </p>
          <div className="modal-action">
            <form method="dialog"></form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PurchaseButton;
