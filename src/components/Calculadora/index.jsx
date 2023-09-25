import { useState } from 'react';

import FormCampo from '../FormCampo';
import Button from '../Button';

import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);

    const getResultadoTratado = (imc) => {
        if (imc < 18.5) {
            return 'Você está abaixo do peso. Consulte um médico.';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Seu peso está dentro da faixa considerada saudável. Continue assim!';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Você está com sobrepeso. Consulte um médico para orientações.';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Você está com obesidade Grau I. Consulte um médico.';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Você está com obesidade Grau II. Consulte um médico.';
        } else {
            return 'Você está com obesidade Grau III. Consulte um médico imediatamente.';
        }
    };
    
    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imc = peso / (alturaMetros * alturaMetros);
        setResultado(imc.toFixed(2));
    };

    return (
        <div className={styles.calculadora}>
            <header>
                <h1>Calculadora de IMC</h1>
            </header>
            <div className={styles.camposContainer}>
                <FormCampo
                    label="Peso (kg):"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    type="number"
                />
                <FormCampo
                    label="Altura (cm)"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    type="number"
                />
            </div>
            <Button onClick={calcularIMC} text="Calcular IMC" />
            {resultado && <div className={styles.resultado}>Seu IMC é: {resultado}</div>}
            {resultado && <div className={styles.tratamento}>{getResultadoTratado(parseFloat(resultado))}</div>}
        </div>
    );
}

export default Calculadora;