// components/ReportModal.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeForm } from "../../redux/reportFormSlice";

const ReportInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, reportTitle } = useAppSelector((state) => state.reportForm);

  if (!isOpen) return null;

  return (
    <div>
      <h3>{reportTitle}</h3>
      <textarea placeholder="Mô tả tố cáo (vui lòng nhập từ 10-50 ký tự)" />
      <br />
      <button onClick={() => dispatch(closeForm())}>Gửi Tố Cáo</button>
    </div>
  );
};

export default ReportInput;
