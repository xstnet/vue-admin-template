declare namespace Api {
  namespace Exam {
    type QuestionItem = {
      question_id: N;
      score: N;
      sequence: N;
    };
    interface CreatePaper extends Base {
      params: Omit<Entity.Exam.Paper, keyof Entity.CommonFields> & {
        questions: QuestionItem[];
      };
      response: { paper_id: N };
    }

    interface UpdatePaper extends Base {
      params: Omit<Entity.Exam.Paper, keyof Entity.CommonFields> & {
        id: N;
        questions: QuestionItem[];
      };
      response: { paper_id: N };
    }
  }
}
