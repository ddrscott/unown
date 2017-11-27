
desc 'images'
task :images do
  require 'open-uri'

  dst_dir = File.join('source', 'images', 'pokemon')

  # ensure destination path exists
  mkdir_p(dst_dir)

  base_url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/%03d.png'

  # There are only 801 known Pokemon's. Maybe one day, there will be more.
  (1..801).each do |num|
    img_url = base_url % num
    dst_path = File.join(dst_dir, File.basename(img_url))
    if File.file?(dst_path)
      puts "#{dst_path} already exists"
    else
      puts "downloading: #{img_url} to #{dst_path}"
      download = open(img_url)
      IO.copy_stream(download, dst_path)
    end
  end
end
