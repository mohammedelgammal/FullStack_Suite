import { useMemo, useState } from "react";
import { Button } from "src/common/ui";
import { OptionType, ThemeType } from "src/types";
import { getAvailableOptions } from "src/utils/helpers";

const Tags = () => {
  const [tags, setTags] = useState<OptionType[]>(getAvailableOptions());
  const availableOptions = useMemo(() => getAvailableOptions(), [tags]);

  const handleChangeOption = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const updatedTags: OptionType[] = tags.map((tag, i) => {
      if (i == id) {
        tag.label = e.target.value;
      }
      return tag;
    });

    setTags(updatedTags);
  };

  const handleSaveTag = (id: number, tag: OptionType): void => {
    const options = getAvailableOptions();
    const updatedOptions = options.map((option, i) => {
      if (i == id) return tag;
      return option;
    });
    localStorage.setItem("tags", JSON.stringify(updatedOptions));
  };

  return (
    <div className="flex gap-1 flex-col px-10 py-5">
      {tags.map((tag, id) => (
        <div className="flex justify-between" key={id}>
          <input
            type="text"
            value={tag.label}
            onChange={(e) => handleChangeOption(e, id)}
          />
          <div className="flex gap-1">
            <Button
              onClick={() => handleSaveTag(id, tag)}
              theme={ThemeType.PRIMARY}
            >
              Save
            </Button>
          </div>
        </div>
      ))}
      <br />
      <Button href=".." theme={ThemeType.SECONDARY}>
        Cancel
      </Button>
    </div>
  );
};

export default Tags;
