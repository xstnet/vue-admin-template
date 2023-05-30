declare namespace Entity {
  namespace Exam {
    // 试卷
    interface Paper extends CommonFields {
      paper_name: string;
      company_id: N;
      creator_id: N;
      start_at: N;
      end_at: N;
      total_score: N;
      pass_score: N;
      max_attempts: N;
      credits: N;
      duration: N;
      is_open_book: N;
    }
    // 题目
    interface Question extends CommonFields {
      type: 'multiple' | 'single' | 'true_false' | 'fill_in_the_blank' | 'essay' | AnyString;
      company_id: N;
      answers: any[];
      content: S;
      options: KV[];
      level: 'hard' | 'difficult' | 'normal' | 'east';
      // 解析
      analysis: S;
      // 启用/禁用
      is_enabled: N;
    }
  }
}
