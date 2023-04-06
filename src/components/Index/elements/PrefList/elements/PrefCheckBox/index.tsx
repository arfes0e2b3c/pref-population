const PrefCheckBox = ({ pref }) => {
  return (
    <>
      <input type='checkbox' id={pref.prefCode} value={pref.prefCode} />
      <label htmlFor={pref.prefCode}>{pref.prefName}</label>
    </>
  );
};

export default PrefCheckBox;
