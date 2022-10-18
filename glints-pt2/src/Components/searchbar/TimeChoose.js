import React from "react";

const TimeChoose = (props) => {
  const { type } = props;

  return type === "day" ? (
    <div>
      <select
        class="mx-2  border-2 h-12 rounded bg-gray-200 hover:bg-white focus:bg-white focus:border-purple-500"
        id="day"
        name="day"
      >
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="monday"
        >
          Monday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="tuesday"
        >
          Tueday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="wednesday"
        >
          Wednesday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="thursday"
        >
          Thursday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="friday"
        >
          Friday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="saturday"
        >
          Saturday
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="sunday"
        >
          Sunday
        </option>
      </select>
    </div>
  ) : (
    <div>
      <select
        class="mx-2 border-2 h-12 rounded bg-gray-200 hover:bg-white focus:bg-white focus:border-purple-500"
        id="day"
        name="day"
      >
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="00"
        >
          12 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="01"
        >
          1 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="02"
        >
          2 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="03"
        >
          3 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="04"
        >
          4 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="05"
        >
          5 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="06"
        >
          6 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="07"
        >
          7 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="08"
        >
          8 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="09"
        >
          9 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="10"
        >
          10 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="11"
        >
          11 am
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="12"
        >
          12 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="13"
        >
          1 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="14"
        >
          2 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="15"
        >
          3 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="16"
        >
          4 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="17"
        >
          5 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="18"
        >
          6 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="19"
        >
          7 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="20"
        >
          8 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="21"
        >
          9 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="22"
        >
          10 pm
        </option>
        <option
          class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          value="23"
        >
          11 pm
        </option>
      </select>
    </div>
  );
};

export default TimeChoose;
