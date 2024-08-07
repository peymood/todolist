//list haye map shode task ha

import React, { useEffect, useMemo, useState } from "react";
import Form from "./Form";
import { List, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import Search from "./Search";
import DeleteAll from "./DeleteAll";

const FormItems: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  const [search, setSearch] = useState<string>("");

  //load krdn task ha
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  //update krdn task ha
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  //delete kardan har task
  const removeTask = (index: number) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
    setSearch("");
  };

  const filterSearch = useMemo(() => {
    if (!search.trim()) return task;
    return task.filter((t) => t.toLowerCase().includes(search.toLowerCase()));
  }, [search, task]);

  return (
    <div className="form-item">
      <Search FormProps={{ task, value }} setSearch={setSearch} />
      <Form task={task} value={value} setValue={setValue} setTask={setTask} />

      <List
        size="small"
        bordered
        dataSource={filterSearch}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type="text"
                onClick={() => removeTask(index)}
                icon={<DeleteOutlined />}
              />,
            ]}
          >
            {item}
          </List.Item>
        )}
        style={{ marginTop: 10, width: 350 }}
      />

      <DeleteAll FormProps={{ task, value }} setTask={setTask} />
    </div>
  );
};

export default FormItems;
