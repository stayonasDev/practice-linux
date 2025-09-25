
const getMyIntro = async () => {
    const res = await fetch(
         'https://raw.githubusercontent.com/stayonasDev/practice-linux/refs/heads/main/deploy/service/resume_portfolio_service.json'
  );
  if(!res.ok){
    throw new Error('Failed to fetch Intro data');
  }
  return res.json();
}

export default async function MyResume() {
    const intros = await getMyIntro();

    return (
        <div className={`${styles.container}`}>
            <IntroductionList intros={intros} />
        </div>
    )
}