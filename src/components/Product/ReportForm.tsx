import { useState } from "react";
import styles from "@/sass/Product/_ReportForm.module.scss";
const ReportForm = ({ handleVisible }: { handleVisible: () => void }) => {
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
  const [title, setTitle] = useState<string>("Chọn lý do");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [showReport, setShowReport] = useState<boolean>(false);

  // onclick btn send form
  const handleSubmit = () => {
    if (description.length < 10 || description.length > 50) {
      setError(true);
      return;
    }
    setError(false);
    setDescription("");
  };

  //onclick toggle show report
  const handleShowReport = (reason: string) => {
    setTitle(reason);
    setShowReport(true);
    setDescription("");
  };

  // onclick go back to form
  const handleBack = () => {
    setTitle("Chọn lý do");
    setShowReport(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {showReport && (
            <button onClick={handleBack} className={styles.headerLeftBtn}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}
          <div className={styles.headerLeftTitle}>{title}</div>
        </div>
        <button onClick={handleVisible} className={styles.headerBtn}>
          &#88;
        </button>
      </header>
      {!showReport ? (
        <div className={styles.form}>
          <div className={styles.formMain}>
            {reasons.map((reason) => (
              <div key={reason}>
                <button
                  onClick={() => handleShowReport(reason)}
                  className={styles.formMainContent}
                >
                  {reason}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.report}>
          <div className={styles.reportMain}>
            <div className={styles.reportMainCover}>
              <p className={styles.reportMainTitle}>Report Description</p>
              <span className={styles.reportMainTitleSpan}>&lowast;</span>
            </div>
            <div>
              <textarea
                value={description}
                className={
                  error ? styles.reportMainFormColor : styles.reportMainForm
                }
                placeholder="Mô tả tố cáo(vui lòng nhập từ 10-50 kí tự)"
                onChange={(e) => setDescription(e.target.value)}
              />
              {error && (
                <p className={styles.reportMainFormError}>
                  Description for this reason should have 10 - 50 characters
                </p>
              )}
            </div>
          </div>
          <div className={styles.reportFooter}>
            <div></div>
            <button onClick={handleSubmit} className={styles.reportFooterBtn}>
              Gửi Tố Cáo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportForm;
