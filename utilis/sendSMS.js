
import axios from "axios";

export const sendSMS = async (to, msg) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=DbjOeIXJzCF2f8FYPIzw&type=text&number=${to}&senderid=8809617612989&message=${msg}`
  );
};




















