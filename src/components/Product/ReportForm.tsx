import { useState } from "react";

import styles from "../../sass/Product/_ReportForm.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { openForm } from "../../redux/reportFormSlice";
const ReportForm = () => {
  const dispatch = useAppDispatch();
  const reasons = [
    "Sản phẩm có dấu hiệu lừa đảo",
    "Hàng giả hàng nhái",
    "Sản phẩm không rõ nguồn gốc xuất xứ",
    "Hình ảnh sản phẩm không rõ ràng",
    "Sản phẩm có hình ảnh,nội dung phản cảm hoặc có thể gây phản cảm",
    "Tên sản phẩm(Name); không phù hợp với hình ảnh sản phẩm",
    "Sản phẩm có dấu hiệu tăng đơn ảo",
    "Sản phẩm chứa hình ảnh và thông tin giao dịch ngoại sàn",
    "Khác",
    "Sản phẩm bị cám buôn bán(động vật hoang dã, 18+)",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <header className={styles.formHeader}>
          <div className={styles.formHeaderTitle}>Chọn lý do</div>
          <button className={styles.formHeaderBtn}>&#88;</button>
        </header>
        <div className={styles.formMain}>
          {reasons.map((reason) => (
            <button
              className={styles.formMainContent}
              key={reason}
              onClick={() => dispatch(openForm(reason))}
              style={{ margin: "5px" }}
            >
              {reason}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
