import { Grid, Autocomplete, TextField, Box } from "@mui/material";
import { EditedOutline } from "../common/EditOutLinedText";
import { IUnitStatModel } from "../common/models/UnitModel";
import { StyleType } from "../common/constants/StyleType";

const AbilitiesForm = (props: {
  unitStat: IUnitStatModel;
  default: IUnitStatModel;
  handleOnChangeStat: (key: keyof IUnitStatModel, value: IUnitStatModel[keyof IUnitStatModel]) => void;
}) => {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChangeStat(event.target.name as any, event.target.value);
  };

  const handleabilityChange = (_: any, items: string[]) => {
    // カンマ区切りで一括登録
    const abilities = [
      ...items.reduce<string[]>((acuumelate, item) => {
        return [...acuumelate, ...item.split(",")];
      }, []),
    ];

    props.handleOnChangeStat("abilities", Array.from(new Set(abilities)));
  };

  return (
    <Grid container>
      <Grid item xs={12} xl={9}>
        {/* ヴァリアブルチャント名 */}
        <EditedOutline isEdited={props.default.variablechantName !== props.unitStat.variablechantName}>
          <TextField
            label="ヴァリアブルチャント名"
            sx={{ width: "100%", background: "#e6dad244" }}
            name="variablechantName"
            value={props.unitStat.variablechantName || ""}
            onChange={handleTextChange}
          />
        </EditedOutline>
        {/* ヴァリアブルチャント詳細 */}
        <EditedOutline isEdited={props.default.variablechantDetail !== props.unitStat.variablechantDetail}>
          <TextField
            label="ヴァリアブルチャント詳細"
            sx={{ width: "100%", background: "#e6dad244" }}
            name="variablechantDetail"
            value={props.unitStat.variablechantDetail || ""}
            onChange={handleTextChange}
            multiline
          />
        </EditedOutline>
        {/* 強化ヴァリアブルチャント詳細 */}
        <EditedOutline
          isEdited={props.default.variablechantEnhancedDetail !== props.unitStat.variablechantEnhancedDetail}
        >
          <TextField
            label="強化ヴァリアブルチャント詳細"
            sx={{ width: "100%", background: "#e6dad244" }}
            name="variablechantEnhancedDetail"
            value={props.unitStat.variablechantEnhancedDetail || ""}
            onChange={handleTextChange}
            multiline
          />
        </EditedOutline>

        <Box sx={props.unitStat.style !== StyleType.ES ? { display: "none" } : {}}>
          {/* Ex必殺技名 */}
          <EditedOutline isEdited={props.default.extraSpecialMoveName !== props.unitStat.extraSpecialMoveName}>
            <TextField
              label="Ex必殺技名"
              sx={{ width: "100%", background: "#cadbdc44" }}
              name="extraSpecialMoveName"
              value={props.unitStat.extraSpecialMoveName || ""}
              onChange={handleTextChange}
            />
          </EditedOutline>
          {/* Ex必殺技詳細 */}
          <EditedOutline isEdited={props.default.extraSpecialMoveDetail !== props.unitStat.extraSpecialMoveDetail}>
            <TextField
              label="Ex必殺技詳細"
              sx={{ width: "100%", background: "#cadbdc44" }}
              name="extraSpecialMoveDetail"
              value={props.unitStat.extraSpecialMoveDetail || ""}
              onChange={handleTextChange}
              multiline
            />
          </EditedOutline>
        </Box>

        <Box sx={!props.unitStat.unitTrueName ? { display: "none" } : {}}>
          {/* アナザーセンス名 */}
          <EditedOutline isEdited={props.default.anotherSenceName !== props.unitStat.anotherSenceName}>
            <TextField
              label="アナザーセンス名"
              sx={{ width: "100%", background: "#d7cbea44" }}
              name="anotherSenceName"
              value={props.unitStat.anotherSenceName || ""}
              onChange={handleTextChange}
            />
          </EditedOutline>
          {/* アナザーセンス詳細 */}
          <EditedOutline isEdited={props.default.anotherSenceDetail !== props.unitStat.anotherSenceDetail}>
            <TextField
              label="アナザーセンス詳細"
              sx={{ width: "100%", background: "#d7cbea44" }}
              name="anotherSenceDetail"
              value={props.unitStat.anotherSenceDetail || ""}
              onChange={handleTextChange}
              multiline
            />
          </EditedOutline>
        </Box>

        {/* 個人アビリティ */}
        <EditedOutline isEdited={props.default.abilities?.join(",") !== props.unitStat.abilities?.join(",")}>
          <Autocomplete
            options={[]}
            renderInput={(params) => <TextField {...params} label="アビリティ" multiline />}
            multiple
            freeSolo
            value={props.unitStat.abilities || []}
            onChange={handleabilityChange}
            ChipProps={{
              sx: {
                height: "auto",
                paddingTop: 0.5,
                paddingBottom: 0.5,
                "& .MuiChip-label": {
                  whiteSpace: "normal",
                },
              },
            }}
          />
        </EditedOutline>
      </Grid>
    </Grid>
  );
};

export default AbilitiesForm;
