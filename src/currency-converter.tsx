import { List } from "@raycast/api";

type CountryType = { code: string; name: string };

function CountriesDropdown(props: { countries: CountryType[]; onCountryChange: (newValue: string) => void }) {
  const { countries, onCountryChange } = props;

  return (
    <List.Dropdown
      tooltip="Select country"
      storeValue={true}
      onChange={(newValue) => {
        onCountryChange(newValue);
      }}
    >
      <List.Dropdown.Section title="Country">
        {countries.map((country) => (
          <List.Dropdown.Item key={country.code} title={country.name} value={country.code}></List.Dropdown.Item>
        ))}
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}

export default function Command() {
  const countries: CountryType[] = [
    { code: "us", name: "USA" },
    { code: "vn", name: "Vietnam" },
  ];

  const onCountryChange = (newValue: string) => {
    console.log(newValue);
  };

  return (
    <List
      navigationTitle="Currency Converter"
      searchBarAccessory={
        <CountriesDropdown countries={countries} onCountryChange={onCountryChange}></CountriesDropdown>
      }
    >
      <List.Item title="Item 1" />
      <List.Item title="Item 2" subtitle="Subtitle" />
    </List>
  );
}
