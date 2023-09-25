import styles from './FormCampo.module.css'

const FormCampo = ({ label, value, onChange, type }) => {
    return (
        <div className={styles.formCampo}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
}

export default FormCampo;