// Vercel 서버 함수: GET /api/hello
// TEST_SECRET 환경변수가 있으면 앞 3글자만 보여주고, 없으면 "환경변수 없음"을 알려준다.
module.exports = (req, res) => {
  const secret = process.env.TEST_SECRET;

  if (secret) {
    res.status(200).json({
      ok: true,
      preview: secret.slice(0, 3),
      message: `${secret.slice(0, 3)}… 연결 성공`,
    });
  } else {
    res.status(200).json({
      ok: false,
      message: '환경변수 없음',
    });
  }
};
