import Onboarding from './onboarding.js';
import LoginForm from './LoginForm.js';
const Login = () => {
    let styles = {
        container: {
            display: 'flex',
            flexFirection: 'row'
        }
    }
    return (
        <div style={styles.container}>
            <Onboarding />
            <LoginForm />
        </div>
    )
}
export default Login;