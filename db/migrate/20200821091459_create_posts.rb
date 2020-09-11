class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.text :content #memoカラム追加 「t.カラムの型: カラム名」
      t.boolean :checked # true, flaseを判断する型
      t.timestamps
    end
  end
end
