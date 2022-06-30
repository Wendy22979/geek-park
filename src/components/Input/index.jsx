import styles from "./input.module.scss"

export default function input (props) {
  let {
    type = "text",
    name,
    value,
    placeholder,
    onChange,
    extra,
    onExtraClick,
    ...rest
  } = props
  return (
    <div className={styles.root}>
      <input
        type={type}
        className={styles.inputCom}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {extra && (
        <div className={styles.extra} onClick={onExtraClick}>
          {extra}
        </div>
      )}
    </div>
  )
}