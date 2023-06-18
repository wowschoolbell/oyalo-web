/* eslint-disable react-hooks/exhaustive-deps */
import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { OutlinedInput, Stack, Tooltip } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { Card, Modal } from "antd";
import { isEmpty } from "ramda";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { AiOutlineDownload, AiOutlineImport } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaEye, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDebounce } from "../../customHooks/useDebouce";
import ViewCard from "../viewCard/ViewCard";
import CustomPagination from "./customPagination";

const customHeaderDesign = {
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#080808",
    color: "#F4A50D",
  },
  ".MuiDataGrid-sortIcon": {
    fill: "white",
  },
  ".MuiIconButton-sizeSmall": {
    color: "white",
  },
};

const customMobileFilterDesign = {
  "& .MuiDataGrid-filterForm": {
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  "& .MuiDataGrid-paper": {
    minWidth: {
      xs: "0",
    },
  },
};

export default function CustomTable({
  dataSource,
  column,
  onClickAdd,
  onClickUpdate,
  title,
  loading = false,
  handleEditClick,
  handleViewClick,
  addButtonStatus = false,
  hideActionBtn = false,
}) {
  const data = (dataSource ?? []).map((data, index) => {
    return {
      "S.No": index + 1,
      id: index + 1,
      ...data,
      status: Number(data.status) ? "Active" : "In Active",
    };
  });

  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState(data);
  const navigate = useNavigate();
  const query = useDebounce(searchText, 600);

  useEffect(() => {
    const text = query.replace(/^\s+/g, "");
    const newData = data.filter((obj) =>
      Object.keys(obj)
        .map((o) => String(obj[o]).toLowerCase())
        .some((v) => v.includes(text.toLowerCase()))
    );
    setTableData(newData);
  }, [query, title, searchText]);

  const columns = [...column].filter((e) => !e.hide);

  if (!hideActionBtn) {
    columns.push({
      field: "action",
      headerName: "Action",
      width: 150,
      sortable: false,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const view = () => {
          if (title === "CAPA Submission List") {
            navigate("/capaView", {
              state: params.row,
            });
          } else if (title === "Entry List") {
            navigate("/auditEntry/auditView", {
              state: params.row,
            });
          } else if (title !== "Approval List") {
            Modal.info({
              title: <div className="align-self-center">{title}</div>,
              width: "50%",
              content: <ViewCard data={params.row} column={column} />,
              icon: <></>,
              onOk() {},
            });
          } else {
            navigate("/approvalView", {
              state: params.row,
            });
          }
        };

        return (
          <Stack direction="row" spacing={3}>
            {title !== "Create Ticket List" ? (
              <Tooltip placement="bottom" title={"View"}>
                <Button
                  variant="outlined"
                  onClick={
                    handleViewClick ? () => handleViewClick(params.row) : view
                  }
                  color="warning"
                  style={{ backgroundColor: "#1f3bb3", width: "50px" }}
                  size="sm">
                  <FaEye color="#fff" />
                </Button>
              </Tooltip>
            ) : (
              <></>
            )}
            {title !== "Role Master" &&
            title !== "Audit Report" &&
            title !== "CAPA Submission List" &&
            title !== "Approval List" &&
            title !== "Create Ticket List" ? (
              <Tooltip placement="bottom" title={"Edit"}>
                <Button
                  variant="outlined"
                  onClick={() => handleEditClick(params.row)}
                  color="error"
                  style={{ backgroundColor: "#ffaf00", width: "50px" }}
                  size="sm">
                  <FaUserEdit color="#fff" />
                </Button>
              </Tooltip>
            ) : (
              <></>
            )}
            {title === "Create Ticket List" ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: params.value }}></div>
                <button
                  className="orangeFactory btn"
                  onClick={() => handleEditClick(params.row)}>
                  Update
                </button>
              </>
            ) : (
              <></>
            )}
          </Stack>
        );
      },
    });
  }

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport
          csvOptions={{
            fileName: title.replace(/ +/g, ""),
            // delimiter: ';',
            utf8WithBom: true,
          }}
          printOptions={{
            hideToolbar: true,
          }}
        />
      </GridToolbarContainer>
    );
  }

  return (
    <Container style={{ width: "100%" }}>
      {/* title={<h3>{title}</h3>} */}
      <Card style={{ height: "100%" }} bordered={true}>
        <div
          className="row align-items-center"
          style={{ paddingLeft: "11px", paddingTop: "4px" }}>
          <div className="col-lg-4 col-md-3 col-sm-12 mt-2 pb-4 row align-items-center">
            <OutlinedInput
              className="align-items-center ml-sm-2 mr-sm-2 shadow-sm"
              id="input-with-icon-adornment"
              placeholder="Search Here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              }
            />
          </div>
          {title !== "Approval List" &&
          title !== "Audit Report" &&
          title !== "CAPA Submission List" ? (
            <div className="col-lg-8 mt-2 col-md-9 col-sm-12 text-md-end text-lg-end text-center  mt-sm-2">
              <div className="btn-group pb-2">
                {title == "Asset Master" ? (
                  <>
                    <Tooltip placement="bottom" title={"update"}>
                      <Button
                        onClick={() => {
                          onClickUpdate();
                        }}
                        className="btn btn-primary me-2 px-md-3 px-sm-4">
                        Update
                      </Button>
                    </Tooltip>
                  </>
                ) : (
                  <></>
                )}
                <Tooltip placement="bottom" title={"Add"}>
                  <Button
                    disabled={addButtonStatus}
                    onClick={() => {
                      onClickAdd();
                    }}
                    className="btn btn-primary me-2 px-md-3 px-sm-4">
                    <BsPlusLg size={12} />
                  </Button>
                </Tooltip>

                {title !== "Entry List" &&
                title !== "Asset Group Issue" &&
                title !== "Asset Group Spare" ? (
                  <>
                    <Tooltip placement="bottom" title={"Upload"}>
                      <div className="btn btn-primary me-2 px-md-3 px-sm-4">
                        <AiOutlineImport size={20} />
                      </div>
                    </Tooltip>
                    <Tooltip placement="bottom" title={"Download"}>
                      <div className="btn btn-primary me-2 px-md-3 px-sm-4">
                        <AiOutlineDownload size={20} />
                      </div>
                    </Tooltip>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <div style={{ height: 520, width: "100%" }}>
            <div style={{ display: "flex", height: "100%" }}>
              <div style={{ flexGrow: 1, fontSize: "25px" }}>
                <DataGrid
                  density="compact"
                  loading={loading}
                  columns={columns}
                  rows={isEmpty(searchText) ? data : tableData}
                  hideFooterSelectedRowCount
                  components={{
                    Toolbar: CustomToolbar,
                  }}
                  componentsProps={{
                    pagination: {
                      ActionsComponent: CustomPagination,
                    },
                    panel: {
                      sx: customMobileFilterDesign,
                    },
                  }}
                  sx={customHeaderDesign}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Container>
  );
}
