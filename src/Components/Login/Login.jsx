import logo from "/chatbot.svg"
import { Container, Forms } from "./LoginStyle";
import { Link } from "react-router-dom";
export default function Login() {
    return (<Container>
        <div>
            <img src={logo} alt="ChatBot Logo" />
            <div>

                <Forms>
                    <input type="text" placeholder="E-mail" required />
                    <input type="password" placeholder="Senha" required />
                    <button type="submit"></button>
                </Forms>
                <Link>Ainda não é cadastrado? Cadastre-se!</Link>
            </div>
        </div>

    </Container>);
}
